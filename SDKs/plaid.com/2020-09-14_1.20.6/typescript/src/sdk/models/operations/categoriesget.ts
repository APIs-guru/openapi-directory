import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoriesGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CategoriesGetResponse extends SpeakeasyBase {
  @Metadata()
  categoriesGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
