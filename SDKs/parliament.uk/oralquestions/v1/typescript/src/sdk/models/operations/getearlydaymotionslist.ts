import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEarlyDayMotionsListParametersOrderByEnum {
    DateTabledAsc = "DateTabledAsc"
,    DateTabledDesc = "DateTabledDesc"
,    TitleAsc = "TitleAsc"
,    TitleDesc = "TitleDesc"
,    SignatureCountAsc = "SignatureCountAsc"
,    SignatureCountDesc = "SignatureCountDesc"
}

export enum GetEarlyDayMotionsListParametersStatusesEnum {
    Published = "Published"
,    Withdrawn = "Withdrawn"
}


export class GetEarlyDayMotionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateEnd" })
  parametersCurrentStatusDateEnd?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateStart" })
  parametersCurrentStatusDateStart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.edmIds" })
  parametersEdmIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.includeSponsoredByMember" })
  parametersIncludeSponsoredByMember?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.isPrayer" })
  parametersIsPrayer?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.memberId" })
  parametersMemberId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.orderBy" })
  parametersOrderBy?: GetEarlyDayMotionsListParametersOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.searchTerm" })
  parametersSearchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.statuses" })
  parametersStatuses?: GetEarlyDayMotionsListParametersStatusesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledEndDate" })
  parametersTabledEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledStartDate" })
  parametersTabledStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.uINWithAmendmentSuffix" })
  parametersUInWithAmendmentSuffix?: string;
}


export class GetEarlyDayMotionsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEarlyDayMotionsListQueryParams;
}


export class GetEarlyDayMotionsListResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @Metadata()
  apiResponseObject?: shared.ApiResponseObject;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
