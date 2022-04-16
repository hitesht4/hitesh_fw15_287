import React from "react";

import styles from './card.module.css'


export const Card =(props)=>{
  const {date,button, heading,subheading,logo} =props
  

  return (
      <>
       <div className={styles.BGcolor} >

         <div className={styles.left_content}>
             <h3 >{date}</h3>
              <button className={styles.btn}>{button}</button>
              <h1>{heading}</h1>
              <h4>{subheading}</h4>
              </div>
         <div className={styles.right_content}>
          <div><img className={styles.logo} src={logo} alt={heading} /> </div>
          <div><img className={styles.logo_arrow}   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAAAflBMVEX///8AAAD4+Pjp6enm5ub29vbv7+/s7Ozz8/Pe3t7n5+fi4uIXFxccHBz6+vra2tpCQkJ5eXmJiYmwsLAICAgRERHR0dFvb2+mpqZlZWVsbGwtLS24uLjKysqCgoIiIiI4ODhJSUmWlpZXV1efn5+9vb0wMDBMTEw6OjqPj486tZRMAAADnUlEQVR4nO3dbVfiMBAF4AAKuApa0AIKvoK7/P8/uLr7QUpLm2Rsx8y997vnzHMsadomE+cYhmEYhlHOdLOcLVb32ev6UruUzjPe3vQOkm20C+oyZ/e949zNtYvqLFkJ/5krjCsgr8T/+wlol9ZBlif1vd7DuXZ1bWdWo//IULu+drOv1xv3r5v0pv2DZr1l/7MP36x/7qU36/fUG/X7/vM/MtKutYX4/fKt+s8C9Ab9dbNdAP8qjG/NH6g35p8G8035vSa8dv0XEXxD/usYvh3/ZRS/N9Cu+5syjuOb8UfyrfhvmqWW/Q0vOa37N9F8G/54vgn/I7Y/ZtpryV/+rgvlj535/M8v7fLFCXzhY87/Bu5/EvnPtMuXpn+L7R+D+8/ppx/Zf0c//fRHJvlF0Oj+Pv30I/uv6KeffvrpR/RPJyL/hXb90tBPP/30w/pl33/Q/dfa9UtDP/3004/qj1/6GurPt4sb2cNmGxFW5OnPF99T7Y+Lj3/3oF1le2n0j160S2w1Df6AncRpptYvWVicSGr8onW1qeSkv7phkrmcWP8gW1SbUKZV+si9dAnmrYpv+HZ/nF1Zb/6Wd5CnMl+7pE5T6v/n0THKUo75smfJ5JIX9UPtejrODHfg+8xVkQ8y4ftKceoX0jTJRIq3fu1qOs/2UB/ROCbxFMY+2RbKFJORz4ufQx9vfOjTHrRJ76Q46UV75NkX+eAPvOivO7BufeXDLpAGv4eS3rl37aK6S9VBH2GdglNO5WcOnMu/Ug8z9Tu5xdvqmp5Caj7wYy9vAJj9NCzuGf7WLrDVNC9t2xieAHgtbMyt3gK8l7Xmy+xFtoK4hdx2s6j1x+YPsl64oQtbn/h2Luqppx5PL2ziQH3CoZ566gH1ssZt2PrE2xZh67FbdlJPfWQSb1aM3aqceuox9dhHdIDrRXhwfeKHM1FPfWQSP5YPW38OrXeyL1mp62XHEaaul/XNSV0vG/ZS14MfRAt+DDH4IdQC/Ui7dnkEB9Ab0LsZtD5+E6kJffRP34Y+ds5jQx/bKtGI3l1A6+P4ZvRRU147+piRf6hd8ncGW+9W0PrQVz3G9IFjnzV9WNsoe/qQvdMG9QFjv0m9d+sMm3rfHapW9W4ErXdu16wfa9fYZl6h9c7tofX1c9/3vnZ17ef6pD5r/mMLqf7aNTnuL2g2g3LvqKe1dlFdpr98KVz2MP/5r+TzfbZYPG53iS/VYxiGYZgflb9LC17oaz/uVAAAAABJRU5ErkJggg==" alt="" /> </div>
         </div>

       </div>
      
      </>
  )

}