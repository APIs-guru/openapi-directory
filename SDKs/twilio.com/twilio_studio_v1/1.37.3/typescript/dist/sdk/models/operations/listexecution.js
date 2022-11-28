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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListExecutionServerList = [
    "https://studio.twilio.com",
];
var ListExecutionPathParams = /** @class */ (function (_super) {
    __extends(ListExecutionPathParams, _super);
    function ListExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListExecutionPathParams.prototype, "flowSid", void 0);
    return ListExecutionPathParams;
}(SpeakeasyBase));
export { ListExecutionPathParams };
var ListExecutionQueryParams = /** @class */ (function (_super) {
    __extends(ListExecutionQueryParams, _super);
    function ListExecutionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedFrom" }),
        __metadata("design:type", Date)
    ], ListExecutionQueryParams.prototype, "dateCreatedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedTo" }),
        __metadata("design:type", Date)
    ], ListExecutionQueryParams.prototype, "dateCreatedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListExecutionQueryParams.prototype, "pageSize", void 0);
    return ListExecutionQueryParams;
}(SpeakeasyBase));
export { ListExecutionQueryParams };
var ListExecutionSecurity = /** @class */ (function (_super) {
    __extends(ListExecutionSecurity, _super);
    function ListExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListExecutionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListExecutionSecurity;
}(SpeakeasyBase));
export { ListExecutionSecurity };
var ListExecutionListExecutionResponseMeta = /** @class */ (function (_super) {
    __extends(ListExecutionListExecutionResponseMeta, _super);
    function ListExecutionListExecutionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionListExecutionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListExecutionListExecutionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionListExecutionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListExecutionListExecutionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListExecutionListExecutionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionListExecutionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListExecutionListExecutionResponseMeta.prototype, "url", void 0);
    return ListExecutionListExecutionResponseMeta;
}(SpeakeasyBase));
export { ListExecutionListExecutionResponseMeta };
var ListExecutionListExecutionResponse = /** @class */ (function (_super) {
    __extends(ListExecutionListExecutionResponse, _super);
    function ListExecutionListExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executions", elemType: shared.StudioV1FlowExecution }),
        __metadata("design:type", Array)
    ], ListExecutionListExecutionResponse.prototype, "executions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListExecutionListExecutionResponseMeta)
    ], ListExecutionListExecutionResponse.prototype, "meta", void 0);
    return ListExecutionListExecutionResponse;
}(SpeakeasyBase));
export { ListExecutionListExecutionResponse };
var ListExecutionRequest = /** @class */ (function (_super) {
    __extends(ListExecutionRequest, _super);
    function ListExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListExecutionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExecutionPathParams)
    ], ListExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExecutionQueryParams)
    ], ListExecutionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExecutionSecurity)
    ], ListExecutionRequest.prototype, "security", void 0);
    return ListExecutionRequest;
}(SpeakeasyBase));
export { ListExecutionRequest };
var ListExecutionResponse = /** @class */ (function (_super) {
    __extends(ListExecutionResponse, _super);
    function ListExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExecutionListExecutionResponse)
    ], ListExecutionResponse.prototype, "listExecutionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListExecutionResponse.prototype, "statusCode", void 0);
    return ListExecutionResponse;
}(SpeakeasyBase));
export { ListExecutionResponse };
