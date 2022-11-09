import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];
}


export class GetRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRulesQueryParams;
}


export class GetRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  getRulesResponse?: shared.GetRulesResponse;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;
}
