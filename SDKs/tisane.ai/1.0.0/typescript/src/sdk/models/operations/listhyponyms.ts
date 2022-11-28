import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHyponymsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLevel" })
  maxLevel?: string;
}


export class ListHyponymsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListHyponymsQueryParams;
}


export class ListHyponymsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
