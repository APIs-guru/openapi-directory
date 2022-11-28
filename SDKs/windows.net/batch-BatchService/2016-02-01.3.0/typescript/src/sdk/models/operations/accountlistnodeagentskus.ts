import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountListNodeAgentSkusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class AccountListNodeAgentSkusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class AccountListNodeAgentSkusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountListNodeAgentSkusQueryParams;

  @SpeakeasyMetadata()
  headers: AccountListNodeAgentSkusHeaders;
}


export class AccountListNodeAgentSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountListNodeAgentSkusResult?: any;

  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
