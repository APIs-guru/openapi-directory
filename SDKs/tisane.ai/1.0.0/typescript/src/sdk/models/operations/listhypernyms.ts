import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListHypernymsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLevel" })
  maxLevel?: string;
}


export class ListHypernymsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHypernymsQueryParams;
}


export class ListHypernymsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listHypernyms200ApplicationJsonArrays?: number[][];
}
