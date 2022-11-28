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
var PostDatabaseValidateParametersSecurity = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParametersSecurity, _super);
    function PostDatabaseValidateParametersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatabaseValidateParametersSecurity.prototype, "jwt", void 0);
    return PostDatabaseValidateParametersSecurity;
}(SpeakeasyBase));
export { PostDatabaseValidateParametersSecurity };
var PostDatabaseValidateParameters200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParameters200ApplicationJson, _super);
    function PostDatabaseValidateParameters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseValidateParameters200ApplicationJson.prototype, "message", void 0);
    return PostDatabaseValidateParameters200ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseValidateParameters200ApplicationJson };
var PostDatabaseValidateParameters400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParameters400ApplicationJson, _super);
    function PostDatabaseValidateParameters400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseValidateParameters400ApplicationJson.prototype, "message", void 0);
    return PostDatabaseValidateParameters400ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseValidateParameters400ApplicationJson };
var PostDatabaseValidateParameters422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParameters422ApplicationJson, _super);
    function PostDatabaseValidateParameters422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseValidateParameters422ApplicationJson.prototype, "message", void 0);
    return PostDatabaseValidateParameters422ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseValidateParameters422ApplicationJson };
var PostDatabaseValidateParameters500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParameters500ApplicationJson, _super);
    function PostDatabaseValidateParameters500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseValidateParameters500ApplicationJson.prototype, "message", void 0);
    return PostDatabaseValidateParameters500ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseValidateParameters500ApplicationJson };
var PostDatabaseValidateParametersRequest = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParametersRequest, _super);
    function PostDatabaseValidateParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatabaseValidateParametersSchema)
    ], PostDatabaseValidateParametersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseValidateParametersSecurity)
    ], PostDatabaseValidateParametersRequest.prototype, "security", void 0);
    return PostDatabaseValidateParametersRequest;
}(SpeakeasyBase));
export { PostDatabaseValidateParametersRequest };
var PostDatabaseValidateParametersResponse = /** @class */ (function (_super) {
    __extends(PostDatabaseValidateParametersResponse, _super);
    function PostDatabaseValidateParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatabaseValidateParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseValidateParameters200ApplicationJson)
    ], PostDatabaseValidateParametersResponse.prototype, "postDatabaseValidateParameters200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseValidateParameters400ApplicationJson)
    ], PostDatabaseValidateParametersResponse.prototype, "postDatabaseValidateParameters400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseValidateParameters422ApplicationJson)
    ], PostDatabaseValidateParametersResponse.prototype, "postDatabaseValidateParameters422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseValidateParameters500ApplicationJson)
    ], PostDatabaseValidateParametersResponse.prototype, "postDatabaseValidateParameters500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatabaseValidateParametersResponse.prototype, "statusCode", void 0);
    return PostDatabaseValidateParametersResponse;
}(SpeakeasyBase));
export { PostDatabaseValidateParametersResponse };
