import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHypernymsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLevel" })
  maxLevel?: string;
}


export class ListHypernymsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListHypernymsQueryParams;
}


export class ListHypernymsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listHypernyms200ApplicationJsonArrays?: number[][];
}
