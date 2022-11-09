import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertAttachment } from "./alertattachment";
import { EventParameterInfo } from "./eventparameterinfo";


export class RaiseAlertInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.AlertAttachment })
  attachments?: AlertAttachment[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=flags" })
  flags?: number;

  @Metadata({ data: "json, name=parameters", elemType: shared.EventParameterInfo })
  parameters?: EventParameterInfo[];

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
