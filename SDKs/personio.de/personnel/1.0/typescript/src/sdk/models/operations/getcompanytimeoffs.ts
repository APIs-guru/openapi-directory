import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompanyTimeOffsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=employees" })
  employees?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_from" })
  updatedFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_to" })
  updatedTo?: string;
}


export class GetCompanyTimeOffsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCompanyTimeOffsQueryParams;
}


export class GetCompanyTimeOffsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  absencePeriodsResponse?: shared.AbsencePeriodsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
