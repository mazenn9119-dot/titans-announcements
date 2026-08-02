"use client";

import Link from "next/link";
import { useState } from "react";

type TemplateType = "meeting" | "recruitment" | "task";

export default function CreateAnnouncementPage() {
  const [template, setTemplate] = useState<TemplateType>("meeting");

  // Meeting Reminder fields
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [meetingAgenda, setMeetingAgenda] = useState("");
  const [meetingAttendees, setMeetingAttendees] = useState("");

  // Recruitment Announcement fields
  const [clubName, setClubName] = useState("Titans");
  const [position, setPosition] = useState("");
  const [whoCanApply, setWhoCanApply] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [requirements, setRequirements] = useState("");

  // Task Submission fields
  const [taskCommittee, setTaskCommittee] = useState("");
  const [taskBy, setTaskBy] = useState("");
  const [taskStartDate, setTaskStartDate] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskRequirements, setTaskRequirements] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [directorCommittee, setDirectorCommittee] = useState("");

  const meetingMessage = `⚔️ TITANS MEETING REMINDER ⚔️

This is a reminder for: ${meetingTitle || "[Meeting Title]"}

📅 Date: ${meetingDate || "[Date]"}
⏰ Time: ${meetingTime || "[Time]"}
📍 Location / Link: ${meetingLocation || "[Location / Online Link]"}

📝 Agenda:
${meetingAgenda || "[Agenda]"}

👥 Required attendees:
${meetingAttendees || "[Required Attendees]"}

Please make sure to attend on time.`;

  const recruitmentMessage = `⚔️ ${clubName || "TITANS"} RECRUITMENT ANNOUNCEMENT ⚔️

We are excited to announce that recruitment is now open for:
${position || "[Position / Committee]"}

👤 Who can apply:
${whoCanApply || "[Who can apply]"}

✅ Requirements:
${requirements || "[Requirements]"}

📅 Application deadline:
${applicationDeadline || "[Application Deadline]"}

🔗 Application link:
${applicationLink || "[Application Link]"}

Don’t miss the chance to join us.`;

  const taskMessage = `⚔️ TITANS TASK SUBMISSION ⚔️

📌 Task for: ${taskCommittee || "[Committee]"} Committee
👤 By: ${taskBy || "[Assigned By]"}
🗓️ Start Date: ${taskStartDate || "[Start Date]"}
⏳ Deadline: ${taskDeadline || "[Deadline]"}

📋 Task Requirements:
${taskRequirements || "[Task Requirements]"}

— ${directorName || "[Director Name]"} | Director of ${
    directorCommittee || "[Director Committee]"
  }

Posted in the Operations group for tracking, deadlines, and responsibility follow-up. 🚀`;

  const message =
    template === "meeting"
      ? meetingMessage
      : template === "recruitment"
      ? recruitmentMessage
      : taskMessage;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    alert("Message copied!");
  }

  return (
    <main
      className="min-h-screen text-white px-6 py-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-slate-300 hover:text-white"
        >
          ← Back Home
        </Link>

        <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl md:text-5xl font-bold mb-2 tracking-wide">
          Create Announcement
        </h1>

        <p className="text-slate-300 mb-8">
          Choose a template, fill in the details, and copy or send the message.
        </p>

        <div className="mb-8 grid md:grid-cols-3 gap-4">
          <button
            onClick={() => setTemplate("meeting")}
            className={`rounded-2xl border px-5 py-4 text-left transition ${
              template === "meeting"
                ? "border-amber-400 bg-amber-500/20"
                : "border-white/10 bg-slate-950/70 hover:bg-slate-900/80"
            }`}
          >
            <div className="text-xl font-bold">Meeting Reminder</div>
            <div className="text-sm text-slate-300 mt-1">
              For club meetings, board meetings, or committee syncs.
            </div>
          </button>

          <button
            onClick={() => setTemplate("recruitment")}
            className={`rounded-2xl border px-5 py-4 text-left transition ${
              template === "recruitment"
                ? "border-amber-400 bg-amber-500/20"
                : "border-white/10 bg-slate-950/70 hover:bg-slate-900/80"
            }`}
          >
            <div className="text-xl font-bold">Recruitment</div>
            <div className="text-sm text-slate-300 mt-1">
              For opening applications to join a team or committee.
            </div>
          </button>

          <button
            onClick={() => setTemplate("task")}
            className={`rounded-2xl border px-5 py-4 text-left transition ${
              template === "task"
                ? "border-amber-400 bg-amber-500/20"
                : "border-white/10 bg-slate-950/70 hover:bg-slate-900/80"
            }`}
          >
            <div className="text-xl font-bold">Task Submission</div>
            <div className="text-sm text-slate-300 mt-1">
              For posting committee tasks in the Operations group.
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-slate-950/80 backdrop-blur rounded-3xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-5">
              {template === "meeting"
                ? "Meeting Details"
                : template === "recruitment"
                ? "Recruitment Details"
                : "Task Details"}
            </h2>

            {template === "meeting" && (
              <div className="space-y-4">
                <InputField
                  label="Meeting title"
                  value={meetingTitle}
                  onChange={setMeetingTitle}
                  placeholder="Weekly Board Meeting"
                />

                <InputField
                  label="Date"
                  value={meetingDate}
                  onChange={setMeetingDate}
                  placeholder="10 August 2026"
                />

                <InputField
                  label="Time"
                  value={meetingTime}
                  onChange={setMeetingTime}
                  placeholder="6:00 PM"
                />

                <InputField
                  label="Location / Online link"
                  value={meetingLocation}
                  onChange={setMeetingLocation}
                  placeholder="Main Hall / Zoom link"
                />

                <TextareaField
                  label="Agenda"
                  value={meetingAgenda}
                  onChange={setMeetingAgenda}
                  placeholder="Discuss upcoming event plan, tasks, and deadlines"
                />

                <InputField
                  label="Required attendees"
                  value={meetingAttendees}
                  onChange={setMeetingAttendees}
                  placeholder="Board members / Marketing team"
                />
              </div>
            )}

            {template === "recruitment" && (
              <div className="space-y-4">
                <InputField
                  label="Club name"
                  value={clubName}
                  onChange={setClubName}
                  placeholder="Titans"
                />

                <InputField
                  label="Position / Committee"
                  value={position}
                  onChange={setPosition}
                  placeholder="Marketing Committee"
                />

                <InputField
                  label="Who can apply"
                  value={whoCanApply}
                  onChange={setWhoCanApply}
                  placeholder="All students / First-year students"
                />

                <TextareaField
                  label="Requirements"
                  value={requirements}
                  onChange={setRequirements}
                  placeholder="Passionate, committed, good communication skills"
                />

                <InputField
                  label="Application deadline"
                  value={applicationDeadline}
                  onChange={setApplicationDeadline}
                  placeholder="15 August 2026, 11:59 PM"
                />

                <InputField
                  label="Application link"
                  value={applicationLink}
                  onChange={setApplicationLink}
                  placeholder="https://example.com/apply"
                />
              </div>
            )}

            {template === "task" && (
              <div className="space-y-4">
                <InputField
                  label="Committee"
                  value={taskCommittee}
                  onChange={setTaskCommittee}
                  placeholder="Marketing"
                />

                <InputField
                  label="Assigned by"
                  value={taskBy}
                  onChange={setTaskBy}
                  placeholder="Director Name"
                />

                <InputField
                  label="Start date"
                  value={taskStartDate}
                  onChange={setTaskStartDate}
                  placeholder="10 August 2026"
                />

                <InputField
                  label="Deadline"
                  value={taskDeadline}
                  onChange={setTaskDeadline}
                  placeholder="15 August 2026, 11:59 PM"
                />

                <TextareaField
                  label="Task requirements"
                  value={taskRequirements}
                  onChange={setTaskRequirements}
                  placeholder="Write the full task requirements here..."
                />

                <InputField
                  label="Director name"
                  value={directorName}
                  onChange={setDirectorName}
                  placeholder="Mazen Ayman"
                />

                <InputField
                  label="Director committee"
                  value={directorCommittee}
                  onChange={setDirectorCommittee}
                  placeholder="Operations"
                />
              </div>
            )}
          </section>

          <section className="bg-white/90 backdrop-blur text-slate-950 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-5">Preview</h2>

            <pre className="whitespace-pre-wrap font-sans bg-slate-100/90 rounded-2xl p-5 min-h-96">
              {message}
            </pre>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button
                onClick={copyMessage}
                className="rounded-xl bg-slate-950 text-white px-5 py-3 font-semibold hover:bg-slate-800"
              >
                Copy Message
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                className="text-center rounded-xl bg-green-500 text-white px-5 py-3 font-semibold hover:bg-green-600"
              >
                Open WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-amber-400"
        placeholder={placeholder}
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-28 rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-amber-400"
        placeholder={placeholder}
      />
    </div>
  );
}