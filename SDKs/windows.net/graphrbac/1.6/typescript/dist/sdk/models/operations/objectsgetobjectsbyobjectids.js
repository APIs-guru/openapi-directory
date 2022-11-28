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
var ObjectsGetObjectsByObjectIdsPathParams = /** @class */ (function (_super) {
    __extends(ObjectsGetObjectsByObjectIdsPathParams, _super);
    function ObjectsGetObjectsByObjectIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ObjectsGetObjectsByObjectIdsPathParams.prototype, "tenantId", void 0);
    return ObjectsGetObjectsByObjectIdsPathParams;
}(SpeakeasyBase));
export { ObjectsGetObjectsByObjectIdsPathParams };
var ObjectsGetObjectsByObjectIdsQueryParams = /** @class */ (function (_super) {
    __extends(ObjectsGetObjectsByObjectIdsQueryParams, _super);
    function ObjectsGetObjectsByObjectIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ObjectsGetObjectsByObjectIdsQueryParams.prototype, "apiVersion", void 0);
    return ObjectsGetObjectsByObjectIdsQueryParams;
}(SpeakeasyBase));
export { ObjectsGetObjectsByObjectIdsQueryParams };
var ObjectsGetObjectsByObjectIdsRequests = /** @class */ (function (_super) {
    __extends(ObjectsGetObjectsByObjectIdsRequests, _super);
    function ObjectsGetObjectsByObjectIdsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ObjectsGetObjectsByObjectIdsRequests.prototype, "getObjectsParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], ObjectsGetObjectsByObjectIdsRequests.prototype, "getObjectsParameters1", void 0);
    return ObjectsGetObjectsByObjectIdsRequests;
}(SpeakeasyBase));
export { ObjectsGetObjectsByObjectIdsRequests };
var ObjectsGetObjectsByObjectIdsRequest = /** @class */ (function (_super) {
    __extends(ObjectsGetObjectsByObjectIdsRequest, _super);
    function ObjectsGetObjectsByObjectIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ObjectsGetObjectsByObjectIdsPathParams)
    ], ObjectsGetObjectsByObjectIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ObjectsGetObjectsByObjectIdsQueryParams)
    ], ObjectsGetObjectsByObjectIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ObjectsGetObjectsByObjectIdsRequests)
    ], ObjectsGetObjectsByObjectIdsRequest.prototype, "request", void 0);
    return ObjectsGetObjectsByObjectIdsRequest;
}(SpeakeasyBase));
export { ObjectsGetObjectsByObjectIdsRequest };
var ObjectsGetObjectsByObjectIdsResponse = /** @class */ (function (_super) {
    __extends(ObjectsGetObjectsByObjectIdsResponse, _super);
    function ObjectsGetObjectsByObjectIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ObjectsGetObjectsByObjectIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryObjectListResult)
    ], ObjectsGetObjectsByObjectIdsResponse.prototype, "directoryObjectListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ObjectsGetObjectsByObjectIdsResponse.prototype, "statusCode", void 0);
    return ObjectsGetObjectsByObjectIdsResponse;
}(SpeakeasyBase));
export { ObjectsGetObjectsByObjectIdsResponse };
