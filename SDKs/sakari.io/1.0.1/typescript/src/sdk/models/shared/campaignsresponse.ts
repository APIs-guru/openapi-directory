import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Campaign } from "./campaign";


export class CampaignsResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CampaignsResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class CampaignsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Campaign })
  data?: Campaign[];

  @Metadata({ data: "json, name=error" })
  error?: CampaignsResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: CampaignsResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
