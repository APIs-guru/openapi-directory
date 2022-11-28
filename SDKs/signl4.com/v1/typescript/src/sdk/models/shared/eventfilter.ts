import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";



export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @SpeakeasyMetadata({ data: "json, name=eventStatusCode" })
  eventStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=maxCreationDate" })
  maxCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minCreationDate" })
  minCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedSince" })
  modifiedSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=textToSearch" })
  textToSearch?: string;
}
