import { InjectionToken } from "@angular/core";
import { LoginRequestModel } from "../models/auth.model";

export const LOGIN_REQUEST = new InjectionToken<LoginRequestModel>('LOGIN_REQUEST');