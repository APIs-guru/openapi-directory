import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertAttachment } from "./alertattachment";
import { EventParameterInfo } from "./eventparameterinfo";



export class RaiseAlertInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AlertAttachment })
  attachments?: AlertAttachment[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EventParameterInfo })
  parameters?: EventParameterInfo[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
