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
export var LISTSTEP_SERVERS = [
    "https://studio.twilio.com",
];
var ListStepPathParams = /** @class */ (function (_super) {
    __extends(ListStepPathParams, _super);
    function ListStepPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" }),
        __metadata("design:type", String)
    ], ListStepPathParams.prototype, "engagementSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListStepPathParams.prototype, "flowSid", void 0);
    return ListStepPathParams;
}(SpeakeasyBase));
export { ListStepPathParams };
var ListStepQueryParams = /** @class */ (function (_super) {
    __extends(ListStepQueryParams, _super);
    function ListStepQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListStepQueryParams.prototype, "pageSize", void 0);
    return ListStepQueryParams;
}(SpeakeasyBase));
export { ListStepQueryParams };
var ListStepSecurity = /** @class */ (function (_super) {
    __extends(ListStepSecurity, _super);
    function ListStepSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListStepSecurity.prototype, "accountSidAuthToken", void 0);
    return ListStepSecurity;
}(SpeakeasyBase));
export { ListStepSecurity };
var ListStepRequest = /** @class */ (function (_super) {
    __extends(ListStepRequest, _super);
    function ListStepRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListStepRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListStepPathParams)
    ], ListStepRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListStepQueryParams)
    ], ListStepRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListStepSecurity)
    ], ListStepRequest.prototype, "security", void 0);
    return ListStepRequest;
}(SpeakeasyBase));
export { ListStepRequest };
var ListStepListStepResponseMeta = /** @class */ (function (_super) {
    __extends(ListStepListStepResponseMeta, _super);
    function ListStepListStepResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListStepListStepResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListStepListStepResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListStepListStepResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListStepListStepResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListStepListStepResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListStepListStepResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListStepListStepResponseMeta.prototype, "url", void 0);
    return ListStepListStepResponseMeta;
}(SpeakeasyBase));
export { ListStepListStepResponseMeta };
var ListStepListStepResponse = /** @class */ (function (_super) {
    __extends(ListStepListStepResponse, _super);
    function ListStepListStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListStepListStepResponseMeta)
    ], ListStepListStepResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=steps", elemType: shared.StudioV1FlowEngagementStep }),
        __metadata("design:type", Array)
    ], ListStepListStepResponse.prototype, "steps", void 0);
    return ListStepListStepResponse;
}(SpeakeasyBase));
export { ListStepListStepResponse };
var ListStepResponse = /** @class */ (function (_super) {
    __extends(ListStepResponse, _super);
    function ListStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListStepResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListStepListStepResponse)
    ], ListStepResponse.prototype, "listStepResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListStepResponse.prototype, "statusCode", void 0);
    return ListStepResponse;
}(SpeakeasyBase));
export { ListStepResponse };
