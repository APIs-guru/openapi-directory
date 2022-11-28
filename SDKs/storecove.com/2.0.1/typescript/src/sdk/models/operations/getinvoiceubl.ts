import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetInvoiceUblPackagingEnum {
    Json = "json",
    Ubl = "ubl"
}


export class GetInvoiceUblPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packaging" })
  packaging: GetInvoiceUblPackagingEnum;
}


export class GetInvoiceUblRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceUblPathParams;
}


export class GetInvoiceUblResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchaseInvoiceUbl?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
