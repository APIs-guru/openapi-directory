var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var AccountListNodeAgentSkusQueryParams = /** @class */ (function (_super) {
    __extends(AccountListNodeAgentSkusQueryParams, _super);
    function AccountListNodeAgentSkusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], AccountListNodeAgentSkusQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], AccountListNodeAgentSkusQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], AccountListNodeAgentSkusQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], AccountListNodeAgentSkusQueryParams.prototype, "timeout", void 0);
    return AccountListNodeAgentSkusQueryParams;
}(SpeakeasyBase));
export { AccountListNodeAgentSkusQueryParams };
var AccountListNodeAgentSkusHeaders = /** @class */ (function (_super) {
    __extends(AccountListNodeAgentSkusHeaders, _super);
    function AccountListNodeAgentSkusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], AccountListNodeAgentSkusHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], AccountListNodeAgentSkusHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], AccountListNodeAgentSkusHeaders.prototype, "returnClientRequestId", void 0);
    return AccountListNodeAgentSkusHeaders;
}(SpeakeasyBase));
export { AccountListNodeAgentSkusHeaders };
var AccountListNodeAgentSkusRequest = /** @class */ (function (_super) {
    __extends(AccountListNodeAgentSkusRequest, _super);
    function AccountListNodeAgentSkusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccountListNodeAgentSkusQueryParams)
    ], AccountListNodeAgentSkusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccountListNodeAgentSkusHeaders)
    ], AccountListNodeAgentSkusRequest.prototype, "headers", void 0);
    return AccountListNodeAgentSkusRequest;
}(SpeakeasyBase));
export { AccountListNodeAgentSkusRequest };
var AccountListNodeAgentSkusResponse = /** @class */ (function (_super) {
    __extends(AccountListNodeAgentSkusResponse, _super);
    function AccountListNodeAgentSkusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AccountListNodeAgentSkusResponse.prototype, "accountListNodeAgentSkusResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AccountListNodeAgentSkusResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccountListNodeAgentSkusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AccountListNodeAgentSkusResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccountListNodeAgentSkusResponse.prototype, "statusCode", void 0);
    return AccountListNodeAgentSkusResponse;
}(SpeakeasyBase));
export { AccountListNodeAgentSkusResponse };
