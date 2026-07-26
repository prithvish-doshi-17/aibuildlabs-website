"use client";

import { FormEvent, useState } from "react";

type RequestFormProps = {
  context?: string;
  compact?: boolean;
};

type FormState = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "2043ce90-892e-4390-a86f-8e42f3b0e366";

export function RequestForm({
  context = "AI Build Labs request",
  compact = false,
}: RequestFormProps) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `${context} from ${formData.get("name")}`);
    formData.append("from_name", "AI Build Labs website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Request could not be sent");
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form
      className={`request-form ${compact ? "request-form-compact" : ""}`}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="request_context" value={context} />
      <div className="request-honeypot" aria-hidden="true">
        <label htmlFor={`${context}-website`}>Website</label>
        <input
          id={`${context}-website`}
          name="botcheck"
          type="checkbox"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="request-field">
        <label htmlFor={`${context}-name`}>Name</label>
        <input
          id={`${context}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="request-field">
        <label htmlFor={`${context}-email`}>Work email</label>
        <input
          id={`${context}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="request-field request-field-wide">
        <label htmlFor={`${context}-company`}>Company or team</label>
        <input
          id={`${context}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Optional"
        />
      </div>

      <div className="request-field request-field-wide">
        <label htmlFor={`${context}-message`}>What would you like to discuss?</label>
        <textarea
          id={`${context}-message`}
          name="message"
          rows={compact ? 3 : 4}
          placeholder="A short note about your team, problem, or use case"
          required
        />
      </div>

      <div className="request-form-footer request-field-wide">
        <button
          className="button button-light"
          type="submit"
          disabled={state === "sending"}
        >
          {state === "sending" ? "Sending request" : "Send request"}
        </button>
        <p className="request-form-status" role="status" aria-live="polite">
          {state === "success" && "Thanks. Your request has been received."}
          {state === "error" && "The request could not be sent. Please try again shortly."}
        </p>
      </div>
    </form>
  );
}
