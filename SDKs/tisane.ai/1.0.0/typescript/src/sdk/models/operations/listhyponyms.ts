import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListHyponymsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLevel" })
  maxLevel?: string;
}


export class ListHyponymsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHyponymsQueryParams;
}


export class ListHyponymsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
