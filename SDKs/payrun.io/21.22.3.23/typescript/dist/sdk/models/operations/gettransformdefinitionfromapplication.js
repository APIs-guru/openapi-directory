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
var GetTransformDefinitionFromApplicationPathParams = /** @class */ (function (_super) {
    __extends(GetTransformDefinitionFromApplicationPathParams, _super);
    function GetTransformDefinitionFromApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TransformDefinitionId" }),
        __metadata("design:type", String)
    ], GetTransformDefinitionFromApplicationPathParams.prototype, "transformDefinitionId", void 0);
    return GetTransformDefinitionFromApplicationPathParams;
}(SpeakeasyBase));
export { GetTransformDefinitionFromApplicationPathParams };
var GetTransformDefinitionFromApplicationHeaders = /** @class */ (function (_super) {
    __extends(GetTransformDefinitionFromApplicationHeaders, _super);
    function GetTransformDefinitionFromApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTransformDefinitionFromApplicationHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTransformDefinitionFromApplicationHeaders.prototype, "authorization", void 0);
    return GetTransformDefinitionFromApplicationHeaders;
}(SpeakeasyBase));
export { GetTransformDefinitionFromApplicationHeaders };
var GetTransformDefinitionFromApplicationRequest = /** @class */ (function (_super) {
    __extends(GetTransformDefinitionFromApplicationRequest, _super);
    function GetTransformDefinitionFromApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransformDefinitionFromApplicationPathParams)
    ], GetTransformDefinitionFromApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransformDefinitionFromApplicationHeaders)
    ], GetTransformDefinitionFromApplicationRequest.prototype, "headers", void 0);
    return GetTransformDefinitionFromApplicationRequest;
}(SpeakeasyBase));
export { GetTransformDefinitionFromApplicationRequest };
var GetTransformDefinitionFromApplicationResponse = /** @class */ (function (_super) {
    __extends(GetTransformDefinitionFromApplicationResponse, _super);
    function GetTransformDefinitionFromApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransformDefinitionFromApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTransformDefinitionFromApplicationResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransformDefinitionFromApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransformDefinition)
    ], GetTransformDefinitionFromApplicationResponse.prototype, "transformDefinition", void 0);
    return GetTransformDefinitionFromApplicationResponse;
}(SpeakeasyBase));
export { GetTransformDefinitionFromApplicationResponse };
