import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetInvoiceUblVersionedPackageVersionEnum {
    Original = "original"
,    Si11 = "si11"
,    Si12 = "si12"
,    Si20 = "si20"
,    Aunz = "aunz"
,    Sg = "sg"
}

export enum GetInvoiceUblVersionedPackagingEnum {
    Ubl = "ubl"
}


export class GetInvoiceUblVersionedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_version" })
  packageVersion: GetInvoiceUblVersionedPackageVersionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=packaging" })
  packaging: GetInvoiceUblVersionedPackagingEnum;
}


export class GetInvoiceUblVersionedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceUblVersionedPathParams;
}


export class GetInvoiceUblVersionedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchaseInvoiceUbl?: any;

  @Metadata()
  statusCode: number;
}
