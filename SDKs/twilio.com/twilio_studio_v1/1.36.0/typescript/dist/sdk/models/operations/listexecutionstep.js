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
import * as shared from "../shared";
export var LISTEXECUTIONSTEP_SERVERS = [
    "https://studio.twilio.com",
];
var ListExecutionStepPathParams = /** @class */ (function (_super) {
    __extends(ListExecutionStepPathParams, _super);
    function ListExecutionStepPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" }),
        __metadata("design:type", String)
    ], ListExecutionStepPathParams.prototype, "executionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListExecutionStepPathParams.prototype, "flowSid", void 0);
    return ListExecutionStepPathParams;
}(SpeakeasyBase));
export { ListExecutionStepPathParams };
var ListExecutionStepQueryParams = /** @class */ (function (_super) {
    __extends(ListExecutionStepQueryParams, _super);
    function ListExecutionStepQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListExecutionStepQueryParams.prototype, "pageSize", void 0);
    return ListExecutionStepQueryParams;
}(SpeakeasyBase));
export { ListExecutionStepQueryParams };
var ListExecutionStepSecurity = /** @class */ (function (_super) {
    __extends(ListExecutionStepSecurity, _super);
    function ListExecutionStepSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListExecutionStepSecurity.prototype, "accountSidAuthToken", void 0);
    return ListExecutionStepSecurity;
}(SpeakeasyBase));
export { ListExecutionStepSecurity };
var ListExecutionStepRequest = /** @class */ (function (_super) {
    __extends(ListExecutionStepRequest, _super);
    function ListExecutionStepRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListExecutionStepRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExecutionStepPathParams)
    ], ListExecutionStepRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExecutionStepQueryParams)
    ], ListExecutionStepRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExecutionStepSecurity)
    ], ListExecutionStepRequest.prototype, "security", void 0);
    return ListExecutionStepRequest;
}(SpeakeasyBase));
export { ListExecutionStepRequest };
var ListExecutionStepListExecutionStepResponseMeta = /** @class */ (function (_super) {
    __extends(ListExecutionStepListExecutionStepResponseMeta, _super);
    function ListExecutionStepListExecutionStepResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "url", void 0);
    return ListExecutionStepListExecutionStepResponseMeta;
}(SpeakeasyBase));
export { ListExecutionStepListExecutionStepResponseMeta };
var ListExecutionStepListExecutionStepResponse = /** @class */ (function (_super) {
    __extends(ListExecutionStepListExecutionStepResponse, _super);
    function ListExecutionStepListExecutionStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListExecutionStepListExecutionStepResponseMeta)
    ], ListExecutionStepListExecutionStepResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=steps", elemType: shared.StudioV1FlowExecutionExecutionStep }),
        __metadata("design:type", Array)
    ], ListExecutionStepListExecutionStepResponse.prototype, "steps", void 0);
    return ListExecutionStepListExecutionStepResponse;
}(SpeakeasyBase));
export { ListExecutionStepListExecutionStepResponse };
var ListExecutionStepResponse = /** @class */ (function (_super) {
    __extends(ListExecutionStepResponse, _super);
    function ListExecutionStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListExecutionStepResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExecutionStepListExecutionStepResponse)
    ], ListExecutionStepResponse.prototype, "listExecutionStepResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListExecutionStepResponse.prototype, "statusCode", void 0);
    return ListExecutionStepResponse;
}(SpeakeasyBase));
export { ListExecutionStepResponse };
