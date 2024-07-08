// "use client";

// import Link from "next/link";
// import { useFormState } from "react-dom";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { PasswordInput } from "@/components/password-input";
// import { APP_TITLE } from "@/lib/constants";
// import { login } from "@/lib/auth/actions";
// import { Label } from "@/components/ui/label";
// import { SubmitButton } from "@/components/submit-button";

// export function Login() {
//     const [state, formAction] = useFormState(login, null);

//     return (
//         <Card className="w-full max-w-md">
//             <CardHeader className="text-center">
//                 <CardTitle>{APP_TITLE} Log In</CardTitle>
//                 <CardDescription>Log in to your account to access your dashboard</CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <div className="my-2 flex items-center">
//                     <div className="border-muted grow border-t" />
//                     <div className="text-muted-foreground mx-2">or</div>
//                     <div className="border-muted flex-grow border-t" />
//                 </div>
//                 <form action={formAction} className="grid gap-4">
//                     <div className="space-y-2">
//                         <Label>Email</Label>
//                         <Input
//                             required
//                             autoComplete="email"
//                             name="email"
//                             placeholder="email@example.com"
//                             type="email"
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Password</Label>
//                         <PasswordInput
//                             required
//                             autoComplete="current-password"
//                             name="password"
//                             placeholder="********"
//                         />
//                     </div>

//                     <div className="flex flex-wrap justify-between">
//                         <Button asChild className="p-0" size={"sm"} variant={"link"}>
//                             <Link href={"/signup"}>Not signed up? Sign up now.</Link>
//                         </Button>
//                         <Button asChild className="p-0" size={"sm"} variant={"link"}>
//                             <Link href={"/reset-password"}>Forgot password?</Link>
//                         </Button>
//                     </div>

//                     {state?.fieldError ? (
//                         <ul className="bg-destructive/10 text-destructive list-disc space-y-1 rounded-lg border p-2 text-[0.8rem] font-medium">
//                             {Object.values(state.fieldError).map((err) => (
//                                 <li className="ml-4" key={err}>
//                                     {err}
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : state?.formError ? (
//                         <p className="bg-destructive/10 text-destructive rounded-lg border p-2 text-[0.8rem] font-medium">
//                             {state?.formError}
//                         </p>
//                     ) : null}
//                     <SubmitButton className="w-full">Log In</SubmitButton>
//                     <Button asChild className="w-full" variant="outline">
//                         <Link href="/">Cancel</Link>
//                     </Button>
//                 </form>
//             </CardContent>
//         </Card>
//     );
// }
