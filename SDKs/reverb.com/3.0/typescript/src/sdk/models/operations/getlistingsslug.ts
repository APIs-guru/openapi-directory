import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListingsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsSlugPathParams;
}


export class GetListingsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
