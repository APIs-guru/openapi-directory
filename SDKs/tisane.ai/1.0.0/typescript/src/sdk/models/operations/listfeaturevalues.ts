import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFeatureValuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ListFeatureValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListFeatureValuesQueryParams;
}


export class ListFeatureValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listFeatureValues200ApplicationJsonStrings?: string[];
}
