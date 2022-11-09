import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCuratedSetsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetCuratedSetsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCuratedSetsSlugPathParams;
}


export class GetCuratedSetsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
