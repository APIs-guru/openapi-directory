import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CabwiseGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceXml" })
  forceXml?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=legacyFormat" })
  legacyFormat?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=optype" })
  optype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=twentyFourSevenOnly" })
  twentyFourSevenOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wc" })
  wc?: string;
}


export class CabwiseGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CabwiseGetQueryParams;
}


export class CabwiseGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
