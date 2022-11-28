import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetEarlyDayMotionsListParametersOrderByEnum {
    DateTabledAsc = "DateTabledAsc",
    DateTabledDesc = "DateTabledDesc",
    TitleAsc = "TitleAsc",
    TitleDesc = "TitleDesc",
    SignatureCountAsc = "SignatureCountAsc",
    SignatureCountDesc = "SignatureCountDesc"
}

export enum GetEarlyDayMotionsListParametersStatusesEnum {
    Published = "Published",
    Withdrawn = "Withdrawn"
}


export class GetEarlyDayMotionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateEnd" })
  parametersCurrentStatusDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.currentStatusDateStart" })
  parametersCurrentStatusDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.edmIds" })
  parametersEdmIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.includeSponsoredByMember" })
  parametersIncludeSponsoredByMember?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.isPrayer" })
  parametersIsPrayer?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.memberId" })
  parametersMemberId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.orderBy" })
  parametersOrderBy?: GetEarlyDayMotionsListParametersOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.searchTerm" })
  parametersSearchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.statuses" })
  parametersStatuses?: GetEarlyDayMotionsListParametersStatusesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledEndDate" })
  parametersTabledEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.tabledStartDate" })
  parametersTabledStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.uINWithAmendmentSuffix" })
  parametersUInWithAmendmentSuffix?: string;
}


export class GetEarlyDayMotionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEarlyDayMotionsListQueryParams;
}


export class GetEarlyDayMotionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @SpeakeasyMetadata()
  apiResponseObject?: shared.ApiResponseObject;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
