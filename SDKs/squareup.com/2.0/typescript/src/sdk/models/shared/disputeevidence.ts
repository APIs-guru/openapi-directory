import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DisputeEvidenceFile } from "./disputeevidencefile";


export class DisputeEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=dispute_id" })
  disputeId?: string;

  @Metadata({ data: "json, name=evidence_file" })
  evidenceFile?: DisputeEvidenceFile;

  @Metadata({ data: "json, name=evidence_id" })
  evidenceId?: string;

  @Metadata({ data: "json, name=evidence_text" })
  evidenceText?: string;

  @Metadata({ data: "json, name=evidence_type" })
  evidenceType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uploaded_at" })
  uploadedAt?: string;
}
