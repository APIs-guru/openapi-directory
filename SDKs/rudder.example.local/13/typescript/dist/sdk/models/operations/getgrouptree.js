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
export var GetGroupTree200ApplicationJsonActionEnum;
(function (GetGroupTree200ApplicationJsonActionEnum) {
    GetGroupTree200ApplicationJsonActionEnum["GetGroupTree"] = "GetGroupTree";
})(GetGroupTree200ApplicationJsonActionEnum || (GetGroupTree200ApplicationJsonActionEnum = {}));
var GetGroupTree200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetGroupTree200ApplicationJsonData, _super);
    function GetGroupTree200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCategories" }),
        __metadata("design:type", Map)
    ], GetGroupTree200ApplicationJsonData.prototype, "groupCategories", void 0);
    return GetGroupTree200ApplicationJsonData;
}(SpeakeasyBase));
export { GetGroupTree200ApplicationJsonData };
export var GetGroupTree200ApplicationJsonResultEnum;
(function (GetGroupTree200ApplicationJsonResultEnum) {
    GetGroupTree200ApplicationJsonResultEnum["Success"] = "success";
    GetGroupTree200ApplicationJsonResultEnum["Error"] = "error";
})(GetGroupTree200ApplicationJsonResultEnum || (GetGroupTree200ApplicationJsonResultEnum = {}));
var GetGroupTree200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupTree200ApplicationJson, _super);
    function GetGroupTree200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetGroupTree200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetGroupTree200ApplicationJsonData)
    ], GetGroupTree200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetGroupTree200ApplicationJson.prototype, "result", void 0);
    return GetGroupTree200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupTree200ApplicationJson };
var GetGroupTreeResponse = /** @class */ (function (_super) {
    __extends(GetGroupTreeResponse, _super);
    function GetGroupTreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupTreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupTree200ApplicationJson)
    ], GetGroupTreeResponse.prototype, "getGroupTree200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupTreeResponse.prototype, "statusCode", void 0);
    return GetGroupTreeResponse;
}(SpeakeasyBase));
export { GetGroupTreeResponse };
