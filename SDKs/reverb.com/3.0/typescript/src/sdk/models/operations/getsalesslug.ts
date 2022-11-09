import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSalesSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetSalesSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSalesSlugPathParams;
}


export class GetSalesSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
