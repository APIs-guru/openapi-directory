import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberStructuredGeocodeExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberStructuredGeocodeExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=countryCode" })
  countryCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=countrySecondarySubdivision" })
  countrySecondarySubdivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=countrySubdivision" })
  countrySubdivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=countryTertiarySubdivision" })
  countryTertiarySubdivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=crossStreet" })
  crossStreet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=municipality" })
  municipality?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=municipalitySubdivision" })
  municipalitySubdivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ofs" })
  ofs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetName" })
  streetName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetNumber" })
  streetNumber?: string;
}


export class GetSearchVersionNumberStructuredGeocodeExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberStructuredGeocodeExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberStructuredGeocodeExtQueryParams;
}


export class GetSearchVersionNumberStructuredGeocodeExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
