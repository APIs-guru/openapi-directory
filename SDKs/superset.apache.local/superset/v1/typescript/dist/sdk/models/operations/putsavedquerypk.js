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
var PutSavedQueryPkPathParams = /** @class */ (function (_super) {
    __extends(PutSavedQueryPkPathParams, _super);
    function PutSavedQueryPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutSavedQueryPkPathParams.prototype, "pk", void 0);
    return PutSavedQueryPkPathParams;
}(SpeakeasyBase));
export { PutSavedQueryPkPathParams };
var PutSavedQueryPkSecurity = /** @class */ (function (_super) {
    __extends(PutSavedQueryPkSecurity, _super);
    function PutSavedQueryPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutSavedQueryPkSecurity.prototype, "jwt", void 0);
    return PutSavedQueryPkSecurity;
}(SpeakeasyBase));
export { PutSavedQueryPkSecurity };
var PutSavedQueryPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk200ApplicationJson, _super);
    function PutSavedQueryPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.SavedQueryRestApiPut)
    ], PutSavedQueryPk200ApplicationJson.prototype, "result", void 0);
    return PutSavedQueryPk200ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk200ApplicationJson };
var PutSavedQueryPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk400ApplicationJson, _super);
    function PutSavedQueryPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSavedQueryPk400ApplicationJson.prototype, "message", void 0);
    return PutSavedQueryPk400ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk400ApplicationJson };
var PutSavedQueryPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk401ApplicationJson, _super);
    function PutSavedQueryPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSavedQueryPk401ApplicationJson.prototype, "message", void 0);
    return PutSavedQueryPk401ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk401ApplicationJson };
var PutSavedQueryPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk404ApplicationJson, _super);
    function PutSavedQueryPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSavedQueryPk404ApplicationJson.prototype, "message", void 0);
    return PutSavedQueryPk404ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk404ApplicationJson };
var PutSavedQueryPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk422ApplicationJson, _super);
    function PutSavedQueryPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSavedQueryPk422ApplicationJson.prototype, "message", void 0);
    return PutSavedQueryPk422ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk422ApplicationJson };
var PutSavedQueryPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSavedQueryPk500ApplicationJson, _super);
    function PutSavedQueryPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSavedQueryPk500ApplicationJson.prototype, "message", void 0);
    return PutSavedQueryPk500ApplicationJson;
}(SpeakeasyBase));
export { PutSavedQueryPk500ApplicationJson };
var PutSavedQueryPkRequest = /** @class */ (function (_super) {
    __extends(PutSavedQueryPkRequest, _super);
    function PutSavedQueryPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPkPathParams)
    ], PutSavedQueryPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SavedQueryRestApiPut)
    ], PutSavedQueryPkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPkSecurity)
    ], PutSavedQueryPkRequest.prototype, "security", void 0);
    return PutSavedQueryPkRequest;
}(SpeakeasyBase));
export { PutSavedQueryPkRequest };
var PutSavedQueryPkResponse = /** @class */ (function (_super) {
    __extends(PutSavedQueryPkResponse, _super);
    function PutSavedQueryPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSavedQueryPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk200ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk400ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk401ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk404ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk422ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSavedQueryPk500ApplicationJson)
    ], PutSavedQueryPkResponse.prototype, "putSavedQueryPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSavedQueryPkResponse.prototype, "statusCode", void 0);
    return PutSavedQueryPkResponse;
}(SpeakeasyBase));
export { PutSavedQueryPkResponse };
