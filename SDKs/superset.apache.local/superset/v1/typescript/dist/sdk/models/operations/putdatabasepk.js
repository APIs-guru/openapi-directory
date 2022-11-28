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
var PutDatabasePkPathParams = /** @class */ (function (_super) {
    __extends(PutDatabasePkPathParams, _super);
    function PutDatabasePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutDatabasePkPathParams.prototype, "pk", void 0);
    return PutDatabasePkPathParams;
}(SpeakeasyBase));
export { PutDatabasePkPathParams };
var PutDatabasePkSecurity = /** @class */ (function (_super) {
    __extends(PutDatabasePkSecurity, _super);
    function PutDatabasePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutDatabasePkSecurity.prototype, "jwt", void 0);
    return PutDatabasePkSecurity;
}(SpeakeasyBase));
export { PutDatabasePkSecurity };
var PutDatabasePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk200ApplicationJson, _super);
    function PutDatabasePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutDatabasePk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatabaseRestApiPut)
    ], PutDatabasePk200ApplicationJson.prototype, "result", void 0);
    return PutDatabasePk200ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk200ApplicationJson };
var PutDatabasePk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk400ApplicationJson, _super);
    function PutDatabasePk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk400ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk400ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk400ApplicationJson };
var PutDatabasePk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk401ApplicationJson, _super);
    function PutDatabasePk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk401ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk401ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk401ApplicationJson };
var PutDatabasePk403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk403ApplicationJson, _super);
    function PutDatabasePk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk403ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk403ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk403ApplicationJson };
var PutDatabasePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk404ApplicationJson, _super);
    function PutDatabasePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk404ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk404ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk404ApplicationJson };
var PutDatabasePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk422ApplicationJson, _super);
    function PutDatabasePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk422ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk422ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk422ApplicationJson };
var PutDatabasePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatabasePk500ApplicationJson, _super);
    function PutDatabasePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatabasePk500ApplicationJson.prototype, "message", void 0);
    return PutDatabasePk500ApplicationJson;
}(SpeakeasyBase));
export { PutDatabasePk500ApplicationJson };
var PutDatabasePkRequest = /** @class */ (function (_super) {
    __extends(PutDatabasePkRequest, _super);
    function PutDatabasePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePkPathParams)
    ], PutDatabasePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatabaseRestApiPut)
    ], PutDatabasePkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePkSecurity)
    ], PutDatabasePkRequest.prototype, "security", void 0);
    return PutDatabasePkRequest;
}(SpeakeasyBase));
export { PutDatabasePkRequest };
var PutDatabasePkResponse = /** @class */ (function (_super) {
    __extends(PutDatabasePkResponse, _super);
    function PutDatabasePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDatabasePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk200ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk400ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk401ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk403ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk404ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk422ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatabasePk500ApplicationJson)
    ], PutDatabasePkResponse.prototype, "putDatabasePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDatabasePkResponse.prototype, "statusCode", void 0);
    return PutDatabasePkResponse;
}(SpeakeasyBase));
export { PutDatabasePkResponse };
