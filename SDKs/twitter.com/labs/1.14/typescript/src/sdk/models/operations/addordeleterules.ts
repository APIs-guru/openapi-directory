import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddOrDeleteRulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dry_run" })
  dryRun?: boolean;
}


export class AddOrDeleteRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddOrDeleteRulesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class AddOrDeleteRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addOrDeleteRules200ApplicationJsonOneOf?: any;
}
