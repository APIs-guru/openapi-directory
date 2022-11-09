import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddOrDeleteRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dry_run" })
  dryRun?: boolean;
}


export class AddOrDeleteRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddOrDeleteRulesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class AddOrDeleteRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  addOrDeleteRules200ApplicationJsonOneOf?: any;
}
