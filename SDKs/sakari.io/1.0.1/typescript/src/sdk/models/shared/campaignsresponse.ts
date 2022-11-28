import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



export class CampaignsResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CampaignsResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class CampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Campaign })
  data?: Campaign[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CampaignsResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: CampaignsResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
