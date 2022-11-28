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
var ResourcesApiGetListPathParams = /** @class */ (function (_super) {
    __extends(ResourcesApiGetListPathParams, _super);
    function ResourcesApiGetListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cultureCode" }),
        __metadata("design:type", String)
    ], ResourcesApiGetListPathParams.prototype, "cultureCode", void 0);
    return ResourcesApiGetListPathParams;
}(SpeakeasyBase));
export { ResourcesApiGetListPathParams };
var ResourcesApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ResourcesApiGetListQueryParams, _super);
    function ResourcesApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setNames" }),
        __metadata("design:type", Array)
    ], ResourcesApiGetListQueryParams.prototype, "setNames", void 0);
    return ResourcesApiGetListQueryParams;
}(SpeakeasyBase));
export { ResourcesApiGetListQueryParams };
var ResourcesApiGetListRequest = /** @class */ (function (_super) {
    __extends(ResourcesApiGetListRequest, _super);
    function ResourcesApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesApiGetListPathParams)
    ], ResourcesApiGetListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesApiGetListQueryParams)
    ], ResourcesApiGetListRequest.prototype, "queryParams", void 0);
    return ResourcesApiGetListRequest;
}(SpeakeasyBase));
export { ResourcesApiGetListRequest };
var ResourcesApiGetListResponse = /** @class */ (function (_super) {
    __extends(ResourcesApiGetListResponse, _super);
    function ResourcesApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResourcesApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResourcesApiGetListResponse.prototype, "resourcesApiGetList200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResourcesApiGetListResponse.prototype, "resourcesApiGetList200TextJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResourcesApiGetListResponse.prototype, "statusCode", void 0);
    return ResourcesApiGetListResponse;
}(SpeakeasyBase));
export { ResourcesApiGetListResponse };
