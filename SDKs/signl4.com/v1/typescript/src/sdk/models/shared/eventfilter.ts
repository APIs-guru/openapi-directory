import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";


export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @Metadata({ data: "json, name=eventStatusCode" })
  eventStatusCode?: number;

  @Metadata({ data: "json, name=maxCreationDate" })
  maxCreationDate?: Date;

  @Metadata({ data: "json, name=minCreationDate" })
  minCreationDate?: Date;

  @Metadata({ data: "json, name=modifiedSince" })
  modifiedSince?: Date;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=textToSearch" })
  textToSearch?: string;
}
