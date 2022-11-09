import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDistributionLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=linkType" })
  linkType?: string;

  @Metadata({ data: "json, name=mailingListId" })
  mailingListId?: string;

  @Metadata({ data: "json, name=surveyId" })
  surveyId?: string;
}
