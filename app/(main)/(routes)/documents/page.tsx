"use client"
import { useClerk } from '@clerk/clerk-react';
import Image from "next/image";
 import {api} from "@/convex/_generated/api"


import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from 'convex/react';
import {toast} from "sonner";
import { useRouter } from 'next/navigation';


const DocumentPage = () => {
    const create=useMutation(api.documents.create);
    const router=useRouter();

    const onCreate=()=>{
        const promise=create({title:"Untitled"})
        .then((documentId)=>router.push(`/documents/${documentId}`));
        toast.promise(promise,{
            loading:"Creating a new NOte",
            success:"New note created",
            error:"Failed to create a note"
        });

    }

    
       return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
            src="/empty.png"
            height="300"
            width="300"
            alt="Empty"
            className="dark:hidden"
            />
             
           
            
            <Image
            src="/empty-dark.png"
            height="300"
            width="300"
            alt="Empty"
            className="hidden dark:block"
            />
            <Button onClick={onCreate}>
                <PlusCircle className='h-4 w-4 mr-2'/>
                Create a note 
                
                </Button>
            </div>
           
          
         
     );
}
 
export default DocumentPage ;