import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

// A small reusable piece for one file upload field (used 3 times below:
// ID document, selfie, and address proof). Keeping it in this same file
// for now since it's only used here — could be moved to components/ later
// if we need it elsewhere.
function FileUploadField({ label, file, onChange }) {
  return (
    <div>
      <p className="label-caption mb-2">{label}</p>
      <label
        className="flex flex-col items-center justify-center gap-1 border-2 border-dashed border-line rounded-md py-6 cursor-pointer hover:border-ink-strong transition"
      >
        {/* The actual file input is invisible — we style the <label> around it instead,
            since native file inputs are hard to style directly. Clicking anywhere on the
            label opens the file picker because it's linked to the hidden input. */}
        <input
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={(e) => onChange(e.target.files[0])}
        />
        {file ? (
          // Once a file is selected, show its name instead of the upload prompt.
          <p className="text-sm text-brand-700 font-medium">✓ {file.name}</p>
        ) : (
          <>
            <p className="text-sm text-ink-muted">Tap to upload</p>
            <p className="text-xs text-ink-muted">JPG, PNG, or PDF</p>
          </>
        )}
      </label>
    </div>
  );
}

export default function KycVerification() {
  // Form field state — one useState per piece of data we're collecting.
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idDocument, setIdDocument] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Simple check: all fields must be filled before the submit button is enabled.
  const isComplete =
    idType && idNumber && idDocument && selfie && addressProof;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with a real API call, e.g.
    // POST /kyc with multipart/form-data containing idType, idNumber,
    // idDocument file, selfie file, and addressProof file.
    console.log("Submitting KYC:", { idType, idNumber, idDocument, selfie, addressProof });

    // Simulating a network delay for now so the loading state is visible.
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-6">
      <Card className="w-full max-w-sm md:max-w-md">
        <h1 className="text-xl mb-1">Verify your identity</h1>
        <p className="text-sm text-ink-muted mb-6">
          This helps us keep the platform safe and unlocks credit features.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="ID type"
            placeholder="e.g. Ghana Card, Passport"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          />

          <Input
            label="ID number"
            placeholder="Enter ID number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />

          <FileUploadField
            label="ID document"
            file={idDocument}
            onChange={setIdDocument}
          />

          <FileUploadField
            label="Selfie (holding your ID)"
            file={selfie}
            onChange={setSelfie}
          />

          <FileUploadField
            label="Proof of address"
            file={addressProof}
            onChange={setAddressProof}
          />

          {/* Button is disabled until every field/file is filled in */}
          <Button type="submit" disabled={!isComplete || submitting}>
            {submitting ? "Submitting..." : "Submit for verification"}
          </Button>
        </form>
      </Card>
    </div>
  );
}