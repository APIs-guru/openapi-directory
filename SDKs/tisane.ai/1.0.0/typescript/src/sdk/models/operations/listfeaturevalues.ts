import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFeatureValuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ListFeatureValuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFeatureValuesQueryParams;
}


export class ListFeatureValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listFeatureValues200ApplicationJsonStrings?: string[];
}
