import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetInvoiceUblPackagingEnum {
    Json = "json"
,    Ubl = "ubl"
}


export class GetInvoiceUblPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=packaging" })
  packaging: GetInvoiceUblPackagingEnum;
}


export class GetInvoiceUblRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceUblPathParams;
}


export class GetInvoiceUblResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchaseInvoiceUbl?: any;

  @Metadata()
  statusCode: number;
}
