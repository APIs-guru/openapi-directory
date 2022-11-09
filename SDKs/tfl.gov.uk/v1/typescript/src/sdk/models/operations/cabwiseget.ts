import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CabwiseGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=forceXml" })
  forceXml?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=legacyFormat" })
  legacyFormat?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=optype" })
  optype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=twentyFourSevenOnly" })
  twentyFourSevenOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wc" })
  wc?: string;
}


export class CabwiseGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CabwiseGetQueryParams;
}


export class CabwiseGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
