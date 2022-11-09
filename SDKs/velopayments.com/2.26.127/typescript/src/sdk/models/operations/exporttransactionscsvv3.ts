import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportTransactionsCsvv3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class ExportTransactionsCsvv3Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportTransactionsCsvv3QueryParams;
}


export class ExportTransactionsCsvv3Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
