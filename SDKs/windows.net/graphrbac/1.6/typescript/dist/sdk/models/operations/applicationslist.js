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
var ApplicationsListPathParams = /** @class */ (function (_super) {
    __extends(ApplicationsListPathParams, _super);
    function ApplicationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsListPathParams.prototype, "tenantId", void 0);
    return ApplicationsListPathParams;
}(SpeakeasyBase));
export { ApplicationsListPathParams };
var ApplicationsListQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsListQueryParams, _super);
    function ApplicationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], ApplicationsListQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsListQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsListQueryParams;
}(SpeakeasyBase));
export { ApplicationsListQueryParams };
var ApplicationsListRequest = /** @class */ (function (_super) {
    __extends(ApplicationsListRequest, _super);
    function ApplicationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsListPathParams)
    ], ApplicationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsListQueryParams)
    ], ApplicationsListRequest.prototype, "queryParams", void 0);
    return ApplicationsListRequest;
}(SpeakeasyBase));
export { ApplicationsListRequest };
var ApplicationsListResponse = /** @class */ (function (_super) {
    __extends(ApplicationsListResponse, _super);
    function ApplicationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApplicationListResult)
    ], ApplicationsListResponse.prototype, "applicationListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsListResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsListResponse.prototype, "statusCode", void 0);
    return ApplicationsListResponse;
}(SpeakeasyBase));
export { ApplicationsListResponse };
