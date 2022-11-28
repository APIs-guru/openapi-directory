import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDistributionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: string;

  @SpeakeasyMetadata({ data: "json, name=mailingListId" })
  mailingListId?: string;

  @SpeakeasyMetadata({ data: "json, name=surveyId" })
  surveyId?: string;
}
