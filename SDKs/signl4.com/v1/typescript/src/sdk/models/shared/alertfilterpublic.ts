import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";



export class AlertFilterPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertIds" })
  alertIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=alertsAfterId" })
  alertsAfterId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryIds" })
  categoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @SpeakeasyMetadata({ data: "json, name=maxCreationDate" })
  maxCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minCreationDate" })
  minCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedSince" })
  modifiedSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=showPersonalHiddenCategories" })
  showPersonalHiddenCategories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusCodes" })
  statusCodes?: number;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=textToSearch" })
  textToSearch?: string;
}
