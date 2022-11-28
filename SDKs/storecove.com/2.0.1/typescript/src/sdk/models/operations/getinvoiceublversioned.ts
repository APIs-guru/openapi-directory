import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetInvoiceUblVersionedPackageVersionEnum {
    Original = "original",
    Si11 = "si11",
    Si12 = "si12",
    Si20 = "si20",
    Aunz = "aunz",
    Sg = "sg"
}

export enum GetInvoiceUblVersionedPackagingEnum {
    Ubl = "ubl"
}


export class GetInvoiceUblVersionedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version" })
  packageVersion: GetInvoiceUblVersionedPackageVersionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packaging" })
  packaging: GetInvoiceUblVersionedPackagingEnum;
}


export class GetInvoiceUblVersionedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceUblVersionedPathParams;
}


export class GetInvoiceUblVersionedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchaseInvoiceUbl?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
